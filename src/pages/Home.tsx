import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Clock, TrendingUp, Users } from 'lucide-react';

const services = [
  { name: 'General Supplies', icon: TrendingUp },
  { name: 'Civil Works', icon: Shield },
  { name: 'Mechanical Works', icon: Users },
  { name: 'Water Works', icon: CheckCircle2 },
  { name: 'Electrical Works', icon: Clock },
];

const partners = [
  { id: 1, name: "Partner 1", logo: "/images/pejom.png", pin: "PIN: P051229094Z" },
  { id: 2, name: "Partner 2", logo: "/images/bondtech.png", pin: "PIN: PO51963387Y" },
  { id: 3, name: "Partner 3", logo: "/images/EWK.PNG", pin: "PIN: P052190191V" },
  { id: 4, name: "Partner 4", logo: "/images/yelloltd.png", pin: "PIN: NA" },
];
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i0.wp.com/indonesiarealestatelaw.com/wp-content/uploads/2020/06/Jasa-Konstruksi-Surabaya.jpg?resize=1024%2C705&ssl=1" 
            alt="Engineering Hero" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-transparent to-gray-900/80" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight">
              Engineering Your <span className="text-primary">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              AGB Engineering Services Ltd provides high-standard engineering excellence, 
              delivering trust and reliability across every project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <Link 
                to="/contact" 
                className="soft-ui-button bg-primary text-white text-lg w-full sm:w-auto flex items-center justify-center space-x-2 hover:bg-accent shadow-2xl shadow-primary/30"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="soft-ui-button bg-white text-primary text-lg w-full sm:w-auto flex items-center justify-center hover:bg-gray-100"
              >
                Request a Bid
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                Our Commitment
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight">
                Delivering Excellence Through Precision Engineering
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We pride ourselves on meeting tight timelines and staying within budget while 
                ensuring the highest quality delivery in every sector we serve.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "High-Quality Delivery", desc: "Uncompromising standards in every project phase." },
                  { title: "Tight Timelines", desc: "Efficient project management to meet your deadlines." },
                  { title: "Budget Conscious", desc: "Optimized solutions that respect your financial goals." },
                  { title: "Expert Team", desc: "Highly skilled professionals with years of experience." }
                ].map((item) => (
                  <div key={item.title} className="flex space-x-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/static/engi.jpg"
                  alt="Construction Site" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-gray-100">
                <p className="text-primary font-bold text-4xl mb-2">5+</p>
                <p className="text-gray-500 text-sm font-medium">Years of engineering excellence and counting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl text-gray-900">Comprehensive Engineering Solutions</h2>
            <p className="text-lg text-gray-500">
              From infrastructure to specialized mechanical systems, we offer a wide range of services 
              tailored to meet the complex needs of modern development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.name}
                whileHover={{ y: -10 }}
                className="soft-ui-card p-8 text-center flex flex-col items-center space-y-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-neutral flex items-center justify-center text-primary">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{service.name}</h3>
                <p className="text-sm text-gray-500">Professional solutions delivered with precision and care.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-scrolling Carousel Placeholder */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Our Trusted Partners & Clients</h3>
        </div>
      <div className="flex space-x-12 animate-marquee whitespace-nowrap">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex flex-col items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <div className="w-40 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">{partner.pin}</p>
          </div>
        ))}

        {/* Duplicate for seamless scroll */}
        {partners.map((partner) => (
          <div
            key={`dup-${partner.id}`}
            className="flex flex-col items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <div className="w-40 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">{partner.pin}</p>
          </div>
        ))}
      </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl text-white font-bold">Ready to Start Your Next Project?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Contact our team of experts today for a consultation or to request a bid for your engineering needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/contact" 
                className="soft-ui-button bg-white text-primary text-lg px-12 hover:bg-gray-100 shadow-2xl"
              >
                Get in Touch
              </Link>
              <Link 
                to="/projects" 
                className="soft-ui-button bg-transparent text-white border border-white/30 text-lg px-12 hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
}
