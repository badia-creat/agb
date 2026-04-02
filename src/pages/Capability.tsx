import React from 'react';
import { motion } from 'motion/react';
import { 
  Armchair, 
  NotebookPen, 
  BriefcaseMedical, 
  Tractor, 
  Motorbike, 
  TestTubes, 
  Laptop,
  Users
} from 'lucide-react';

export default function Capability() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Capability</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Our capacity to deliver complex engineering projects is backed by a robust 
              supply chain, diverse workforce, and proven implementation strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Project Implementation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Project Implementation & Delivery</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The government has over the 6 years introduced a system to support smaller contractors in growing. 
                This is from the background of the fact that heavy earth moving machinery is extremely expensive 
                and only established contractors can afford to buy that equipment. The Government therefore has 
                brought all kinds of construction machinery including earth machinery, trucks, load loaders and 
                tippers and placed them at all the provincial headquarters for hire by all Kenyan contractors 
                or individuals as they wish. This has indeed been a great help and Agb Engineering is taking 
                advantage of this. The company has however developed a strategic plan on acquiring its own vehicles 
                so as to cut down cost and be able to provide timely sources to the clients. The company’s plans 
                ahead, it’s to grow tremendously and work in both locally, nationally and internationally.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-neutral rounded-2xl">
                  <h4 className="font-bold text-primary text-2xl mb-1">100%</h4>
                  <p className="text-sm text-gray-500">Project Completion Rate</p>
                </div>
                <div className="p-6 bg-neutral rounded-2xl">
                  <h4 className="font-bold text-primary text-2xl mb-1">On-Time</h4>
                  <p className="text-sm text-gray-500">Delivery Commitment</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/delivery/800/800" 
                  alt="Project Delivery" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employees & Diversity */}
      <section className="py-24 bg-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
              <Users className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Employees & Diversity</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Agb Engineering recognizes the human resource is a key factor of production and it is because of the same 
              that we recognize and accept our employees with the view that they are our asset. Our employees are professionals 
              well trained and equipped with knowledge and skills that makes us a leading powerhouse in our activities.
              We ensure that the recruitment and placement of our employees is conducted with regard to adherence of employee's 
              recruitment and placement regulations and procedures. Our pool of employees is a clear reflection of the face of 
              the nation, because it is all inclusive with different regions in place all bringing their input aimed at giving 
              their best for the company.
            </p>
          </div>
        </div>
      </section>

      {/* Supply Department */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Supply Department</h2>
            <p className="text-lg text-gray-500">Reliable procurement and supply of high-quality engineering materials.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Office furniture', icon: Armchair, desc: 'We offer a broad range of workspace solutions, including desks, boardroom tables, workstations, and executive seating. We also provide custom-designed office furniture manufactured locally to meet specific client requirements.' },
              { title: 'General stationery', icon: NotebookPen, desc: 'Provides a comprehensive inventory of office essentials, covering everything from print media and writing instruments (pens/pencils) to filing systems, computer accessories, and specialized mailing supplies.' },
              { title: 'Medical equipment', icon: BriefcaseMedical, desc: 'We supply a diverse range of medical, dental, and laboratory equipment, including hospital furniture, instruments, and pharmaceutical products. Our services cater to both public and private healthcare facilities, clinics, and educational training institutes.' },
              { title: 'Agricultural inputs', icon: Tractor, desc: 'Our range includes high-performance machinery, nutrient-rich seedlings, and essential cereal crops. We provide the foundational tools and biological inputs necessary to automate farming tasks, improve soil productivity, and ensure high-yield harvests for both food and fodder.' },
              { title: 'Motorbikes & hardware', icon: Motorbike, desc: 'We supply versatile two-wheeled vehicles for efficient mobility alongside a comprehensive selection of precision-engineered manual tools. This category covers everything from agile transport solutions to the rugged hardware needed for mechanical repairs, assembly, and facility maintenance.' },
              { title: 'Lab equipment', icon: TestTubes, desc: 'Providing a full suite of high-precision instruments and specialized glassware for scientific research. Our inventory supports diverse diagnostic and analytical needs, from standard sample containment and liquid processing to advanced microscopic visualization for microbiology and material science.' },
              { title: 'IT products and related', icon: Laptop, desc: 'We offer enterprise-grade computing solutions and networking infrastructure designed for reliability and performance. This includes portable hardware for mobile workflows, high-definition visual interfaces, and the core components required to maintain seamless data connectivity and system uptime.' }
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="soft-ui-card p-8 space-y-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral flex items-center justify-center text-primary">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
