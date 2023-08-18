'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const testimonials = [
  {
    name: 'Bob',
    avatar: 'B',
    title: 'Frontend Engineer',
    description:
      'As a frontend developer, pixel-perfect designs matter a lot. This app has become my go-to tool for quickly creating web images that match the design mockups. Highly recommended!',
  },
  {
    name: 'Charlie',
    avatar: 'C',
    title: 'UI/UX Designer',
    description:
      'Designing user interfaces is my passion, and this app aligns perfectly with my workflow. It helps me generate code and content that seamlessly integrates design and functionality.',
  },
  {
    name: 'David',
    avatar: 'D',
    title: 'Back-end Developer',
    description:
      "I'm impressed by how versatile this application is. It covers everything from code generation to creating web images. It's become an indispensable tool in my toolkit.",
  },
  {
    name: 'Eva',
    avatar: 'E',
    title: 'Product Manager',
    description:
      'Managing a web development project involves numerous tasks. This app simplifies the process by providing quick solutions for generating content and code, making my job much smoother.',
  },
];

export default function LandingContent() {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        Testimonials
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className='bg-[#192339] border-none text-white'
          >
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <p className='text-lg'>{item.name}</p>
                  <p className='text-zinc-400 text-sm'>{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className='pt-4 px-0'>
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
