import ProfileCard from '@/components/ProfileCard'
import ProfileInfo from '@/components/ProfileInfo'

interface DashboardPageProps {}

export default function DashboardPage({}) {
  return (
    <main className="flex flex-col py-10 max-w-6xl mx-auto gap-4 px-3">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard
          </h2>
        </div>
      </div>
      <ProfileCard />
      <ProfileInfo />
    </main>
  )
}
