import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Filter } from 'lucide-react';

const projects = [
  { id: 1, category: 'Civil & Infrastructure', title: 'Expertise You Can Trust', image: '/images/const.png', caption: 'From civil works to mechanical installations, our uniformed experts bring years of collective experience to every construction landscape.' },
  { id: 2, category: 'Mechanical & Wet Services', title: 'Advanced Reticulation Systems', image: '/images/pipes.png', caption: 'Precision-engineered piping and valve systems designed for durability and high-pressure performance in industrial and municipal water works.' },
  { id: 3, category: 'General Supplies', title: 'Reliable Delivery & Distribution', image: '/images/delivery.jpg', caption: 'Our logistics team ensures that high-quality products and materials reach our clients on time, utilizing branded fleet operations to maintain service excellence.' },
  { id: 4, category: 'Civil & Infrastructure', title: 'Heavy Infrastructure Components', image: '/images/ind.png', caption: 'Expert handling and installation of mechanical infrastructure, from heavy-duty valves to industrial piping systems.' },
  { id: 5, category: 'Mechanical & Wet Services', title: 'Transforming Landscapes', image: '/images/galer.png', caption: 'From dam design to sewer reticulation, our heavy equipment is the driving force behind the essential utility systems we build for communities across the nation.' },
  { id: 6, category: 'Civil & Infrastructure', title: 'Shaping the Skyline of Africa', image: '/images/building.png', caption: 'Guided by our mission to be a leading partner in innovative engineering, we are proud to contribute to the growing infrastructure and urban landscape of our nation.' },
];

const categories = ['All', 'Civil & Infrastructure', 'Mechanical & Wet Services', 'General Supplies'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              From Blueprint to Reality, exploring our portfolio of engineering excellence 
              and successful project deliveries.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <div className="flex items-center space-x-2 text-gray-400 mr-4">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-widest">Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-neutral text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-white/70 text-sm">{project.caption}</p>
                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/shop.jpg" 
                  alt="Team on site" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="mt-6 text-sm text-gray-500 italic text-center">
                “Our dedicated team of professionals on-site, ensuring quality and safety at every step.”
              </p>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900">Expertise on Every Site</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our success is built on the collective expertise of our engineers, technicians, 
                and project managers. We bring years of experience to every site, ensuring that 
                from blueprint to reality, every detail is handled with precision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-900">Safety First Approach</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-900">Quality Assured Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-gray-900/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-2">
                <span className="text-primary font-bold text-xs uppercase tracking-widest">{selectedImage.category}</span>
                <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Helper icons
function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

function Award(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}
