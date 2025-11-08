export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} 社会福祉法人健慈会. All Rights Reserved.</p>
      </div>
    </footer>
  );
}