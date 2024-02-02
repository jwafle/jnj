export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-prose mx-auto my-24">
    {children}
    </div>
  )
}