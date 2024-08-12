import Image from 'next/image';
import DotBackground from './DotBackground';
import { LoveCard } from './LoveCard';

const people = [
  {
    name: 'Mojo Jojo',
    role: 'Mr Monkey Man/Editor-in-chief',
    imageUrl: '/img/mojojojo.webp',
    bio: "Mojo Jojo is the main antagonist of The Powerpuff Girls franchise. He is an anthropomorphic chimpanzee supervillain who is the titular super-heroines' arch-nemesis, Professor Utonium's former pet and lab assistant, and creator and first father of the Rowdyruff Boys",
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Moko Jono',
    role: 'Female chimpanzee',
    imageUrl: '/img/mokojoono.svg',
    bio: "Moko Jono (real name: Michelle) is a female chimpanzee from the zoo. Her only appearance is in the episode 'Meet the Beat-Alls', Moko is a parody of performance musician Yoko Ono, who is often attributed as the leading cause of the Beatles' dissolution as a band after she became romantically involved with guitarist and vocalist John Lennon.",
    xUrl: '#',
    linkedinUrl: '#',
  },
]

export default function Team() {
  return (
    <DotBackground>
      <div className="py-24 md:py-32 lg:py-40" id='team'>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 ">
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <h2>Our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            My life’s love and I edit this blog together. For us, it’s more than just a hobby.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name} className="bg-gray-50">
                <div className="aspect-[3/2] w-full relative ">
                  <Image 
                    alt={`${person.name}'s profile picture`}
                    src={person.imageUrl}
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              </li>
            ))}
          </ul>
          <LoveCard/>
      <div className='w-full font-greyQo text-9xl font-semibold mx-auto text-center'>The End</div>
        </div>
      </div>
    </DotBackground>
  )
}