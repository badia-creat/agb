import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Settings, Zap, Building2, Flame, Droplets, ClipboardList, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'mechanical',
    title: 'Mechanical Engineering',
    icon: Settings,
    description: 'Specialized mechanical systems designed for efficiency and longevity.',
    items: ['HVAC systems', 'Boilers', 'Sanitation Systems', 'Refrigeration (cold rooms)', 'Fire protection systems','Medical & Lab Gas','Vertical Transportation','Industrial Air','Water Management','Kitchen & Extraction']
  },
  {
    id: 'electrical',
    title: 'Electrical Engineering',
    icon: Zap,
    description: 'Comprehensive electrical solutions for modern infrastructure.',
    items: ['Power & lighting systems', 'CCTV & access control', 'Data network installations','Backup Power','Safety Detection','Building Automation','Safety Earthing','Public Address','Power Optimization','Telecommunications']
  },
  {
    id: 'civil',
    title: 'Civil Engineering',
    icon: Building2,
    description: 'Building the backbone of modern society with robust infrastructure.',
    items: ['Infrastructure projects', 'Dam design', 'Road construction', 'Water treatment plants', 'Sewer systems','Stormwater Managemen','Waste Treatment','Building Services','Project Oversight','Asset Management']
  },
  {
    id: 'fire',
    title: 'Fire Engineering',
    icon: Flame,
    description: 'Advanced fire safety and protection systems for all building types.',
    items: ['Fire safety designs', 'Automatic sprinklers', 'Emergency evacuation systems','Gas Suppression','Hand-Operated Gear','Smoke Management','Safety Mapping','Regulatory Advice','Authority Liaison','System Integration']
  },
  {
    id: 'wet',
    title: 'Wet Services',
    icon: Droplets,
    description: 'Sustainable water management and plumbing solutions.',
    items: ['Water storage', 'Drainage systems', 'Solar hot water systems','Internal Reticulation','Irrigation Systems','Water Recycling','Rainwater Harvesting','Sustainable Drainage','Water Auditing','Leak Detection']
  },
  {
    id: 'management',
    title: 'Project Management',
    icon: ClipboardList,
    description: 'Professional oversight from planning to project completion.',
    items: ['Project management and contract administration', 'Project planning & initiation', 'Team structuring', 'Costing & Programming','Developing project briefs','Developing project briefs','Risk management','Stakeholder communication','Quality assurance','Project closeout']
  }
];

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              AGB Engineering Services Ltd provides a comprehensive suite of engineering 
              solutions across multiple disciplines, ensuring excellence at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                id={service.id}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-8 flex-grow">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center space-x-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Our Working Process</h2>
            <p className="text-lg text-gray-500">How we deliver excellence from concept to completion.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your needs and project requirements.' },
              { step: '02', title: 'Design & Planning', desc: 'Creating detailed blueprints and technical plans.' },
              { step: '03', title: 'Implementation', desc: 'Executing the project with precision and quality.' },
              { step: '04', title: 'Delivery', desc: 'Final testing, handover, and ongoing support.' }
            ].map((item) => (
              <div key={item.step} className="relative space-y-6">
                <div className="text-6xl font-bold text-gray-100 font-serif absolute -top-4 -left-4 z-0">
                  {item.step}
                </div>
                <div className="relative z-10 space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
