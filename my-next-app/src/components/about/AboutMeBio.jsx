import Image from 'next/image'
import { useState } from 'react'
import { aboutMeData } from '../../data/aboutMeData'


function AboutMeBio () {
  const [aboutMe, setAboutMe] = useState(aboutMeData)
  return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/2 mb-7 sm:mb-0">
				<Image
					src="/images/developer.jpg"
					width={320}
					height={180}
					className="rounded-lg w-full h-auto display: block object-fit: contain"
					alt="Profile Image"
					
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
  )
}

export default AboutMeBio
