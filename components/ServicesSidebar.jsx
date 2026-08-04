import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';
function SectionHeading({ title }) {
  return (
    <div className="mb-5">
      <h4 className="text-base font-bold text-slate-900">{title}</h4>
      <div className="mt-1.5 w-8 h-0.5 bg-red-600 rounded-full" />
    </div>
  );
}

export default function ServicesSidebar({ categories = [], activeCategory = 'All', onSelectCategory }) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="lg:col-span-1 space-y-8 sticky top-4"
    >
   
      <div>
        <SectionHeading title="Category List" />
        <ul className="space-y-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <li key={cat.label}>
                <button
                  onClick={() => onSelectCategory?.(cat.label)}
                  className={`w-full flex items-center justify-between py-2 text-sm transition-colors group rounded-lg px-2 ${
                    isActive
                      ? 'bg-red-50 text-red-600 shadow-sm'
                      : 'text-slate-600 hover:text-red-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Folder className={`w-4 h-4 transition-colors flex-shrink-0 ${isActive ? 'text-red-500' : 'text-slate-400 group-hover:text-red-500'}`} />
                    {cat.label}
                  </span>
                  <span className={`text-xs transition-colors ${isActive ? 'text-red-500' : 'text-slate-500 group-hover:text-red-500'}`}>
                    {cat.count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

  

     
    </motion.aside>
  );
}
