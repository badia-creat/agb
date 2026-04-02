import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Shield, Heart, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              AGB Engineering Services Ltd is a premier engineering firm dedicated to building 
              the future through innovation, integrity, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* History & Chairman Message */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Our History</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Agb Engineering is a full-fledged firm offering diverse construction services, including but not limited to: 
                  heavy civil construction & infrastructure, general contracting, commercial and industrial facilities 
                  construction, site improvement & utilities projects, dam construction and institutional & federal 
                  buildings, road construction and maintenance of way. We have the capability to mobilize locally and 
                  nationally depending on requirements and opportunities. Agb Engineering Technologies has employee 
                  experience of performing work predominantly for State and County Governments, but also contracts with private businesses.
                </p>
                <p>
                  The Company possesses capabilities in numerous diverse disciplines, specializing from the development 
                  of new heavy civil construction, site infrastructure, general contracting, demolition of existing facilities 
                  & structures to multi-year facility maintenance services and general supplies. We have developed a reputation 
                  for completing quality projects on time and within budget constraints. The company was rehabilitation, 
                  turnkey construction of commercial, incorporated in August 2020.
                </p>
              </div>
            </div>
            <div className="bg-neutral p-12 rounded-3xl relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-serif">
                "
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Message from the Chairman</h3>
                <p className="text-xl text-gray-700 italic leading-relaxed font-serif">
                  "We provide the most effective solutions. Our bid not only includes cost but also operational guidelines 
                  for handling personnel, security, work order changes and communication processes. We have an extensive 
                  background in civil works and water works. These experiences have extensive involvement in the 
                  installation and operation of building and construction systems. Our quality is exceptional, 
                  hit project timelines that are quite short and meet the requirements for completing the project 
                  within budgets. Agb Engineering personnel are well trained and the Management Team provides 
                  more than adequate supervision. Our equipment is of the highest quality and does not slow down 
                  projects due to maintenance."
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-900">Aggrey Badia</p>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Chairman & MD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                "To be a leading preferred partner in customer focused and innovative engineering solutions to
                clients nationally and beyond."
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                "We commit to partnering with our clients to offer effective and efficient engineering services
                through our qualified, diligent and dedicated professionals."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-500">The principles that guide our work and define our culture.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Trust', icon: Shield, desc: 'Building lasting relationships through honesty and transparency.' },
              { name: 'Respect', icon: Heart, desc: 'Valuing our clients, employees, and the environment.' },
              { name: 'Ethics', icon: Award, desc: 'Maintaining the highest standards of professional conduct.' },
              { name: 'Teamwork', icon: Users, desc: 'Collaborating effectively to achieve shared goals.' }
            ].map((value) => (
              <div key={value.name} className="text-center space-y-4 p-8 rounded-2xl hover:bg-neutral transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mx-auto">
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{value.name}</h4>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img 
            src="https://picsum.photos/seed/blueprint/1920/1080" 
            alt="Blueprint Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Our Philosophy</h2>
            <p className="text-2xl font-light leading-relaxed italic font-serif">
              "AGB Engineering Services is committed to transforming communities, companies, and the broader 
              industry by acting as both a responsible neighbor and an innovative builder of the nation. 
              Since its establishment, the company has developed a strong portfolio of high-quality assets 
              that support sustainable growth and a lasting legacy. By leveraging its collective expertise and 
              experience, AGB delivers services that are efficient, safe, accessible, and environmentally responsible. 
              Central to its operations is a strong commitment to corporate governance, with best practices 
              embedded across all levels of the organization. This unified and decisive management approach, 
              combined with effective stewardship, strengthens the company’s centralized business model and 
              supports its long-term success."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
