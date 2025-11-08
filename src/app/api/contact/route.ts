
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // ここでメール送信などの処理を行う
    // 今回はコンソールに出力するだけ
    console.log('--- お問い合わせ受信 ---');
    console.log('名前:', name);
    console.log('メールアドレス:', email);
    console.log('件名:', subject);
    console.log('内容:', message);
    console.log('--------------------');

    return NextResponse.json({ message: 'お問い合わせありがとうございます。正常に送信されました。' }, { status: 200 });
  } catch (error) {
    console.error('お問い合わせ処理エラー:', error);
    return NextResponse.json({ message: 'エラーが発生しました。' }, { status: 500 });
  }
}
