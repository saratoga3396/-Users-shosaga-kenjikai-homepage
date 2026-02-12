"use client";

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setError(data.message || '送信に失敗しました。');
      }
    } catch (err) {
      console.error(err);
      setError('ネットワークエラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <section className="text-center py-16 bg-purple-100 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-purple-800 mb-4">お問い合わせ</h2>
        <p className="text-lg text-gray-700">ご質問、ご相談、見学のお申し込みなど、お気軽にご連絡ください。</p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-2 flex items-center">
          <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18"></path></svg>
          <span className="text-purple-600">お問い合わせフォーム</span>
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">お名前</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">メールアドレス</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">件名</label>
            <input type="text" id="subject" name="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">お問い合わせ内容</label>
            <textarea id="message" name="message" rows={6} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>

          {loading && <p className="text-center text-purple-600">送信中...</p>}
          {success && <p className="text-center text-green-600">{success}</p>}
          {error && <p className="text-center text-red-600">{error}</p>}

          <div className="text-center">
            <button type="submit" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300" disabled={loading}>
              送信する
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
