import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Product Photographer',
    comment:
      'This tool transformed the way I present my products online. The AI background removal is fast and incredibly accurate! Highly recommended.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Mark Peterson',
    role: 'Pet Blogger',
    comment:
      'I use this background remover for all my pet photos. It saves me hours of editing and produces amazing results.',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
  {
    name: 'Emily Smith',
    role: 'Freelance Designer',
    comment:
      'Studio-quality portraits in seconds. Perfect for my portfolio and client presentations. This AI is a game changer!',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className=" text-[var(--primary-color)] font-bold text-center mb-10">What Our Users Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#ffffff] border-1 border-[var(--ter-color)] backdrop-blur-md p-6 rounded-xl shadow-xl text-[#333] hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full "
              />
              <div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-[#333]">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-[#666] italic">"{testimonial.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
