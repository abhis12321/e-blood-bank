import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 <span className='italic font-serif'>eBloodBank</span>. All rights reserved.</p>
        <p className="mt-2">
          <Link href="/contact" className="hover:underline">Contact Us</Link> |
          <Link href="/privacy" className="ml-2 hover:underline">Privacy Policy</Link> |
          <Link href="/terms" className="ml-2 hover:underline">Terms of Service</Link>
        </p>
      </div>
    </footer>
  )
}
