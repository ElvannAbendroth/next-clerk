import Image from 'next/image'
import { auth, currentUser } from '@clerk/nextjs/server'

export default async function ProfileCard() {
  const { userId } = auth()
  const user = await currentUser()

  const profile = {
    name: user?.fullName,
    email: user?.primaryEmailAddress?.emailAddress,
    avatar: user?.imageUrl,
    backgroundImage:
      'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    fields: [
      ['Phone', '(555) 123-4567'],
      ['Email', 'ricardocooper@example.com'],
      ['Title', 'Senior Front-End Developer'],
      ['Team', 'Product Development'],
      ['Location', 'San Francisco'],
      ['Sits', 'Oasis, 4th floor'],
      ['Salary', '$145,000'],
      ['Birthday', 'June 8, 1990'],
    ],
  }
  return (
    <div>
      <div>
        <Image
          alt=""
          src={profile.backgroundImage}
          className="h-32 w-full object-cover lg:h-48 rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <Image
              alt=""
              src={profile.avatar as string}
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
        </div>
      </div>
    </div>
  )
}
