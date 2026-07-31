import { Folder } from 'lucide-react';

const categories = [
  { label: 'Business', count: 3 },
  { label: 'Design', count: 2 },
  { label: 'Determine', count: 6 },
  { label: 'Develop', count: 1 },
  { label: 'Earnestly', count: 2 },
  { label: 'Literature', count: 6 },
  { label: 'Popular', count: 1 },
  { label: 'Uncategorized', count: 3 },
  { label: 'Zealously', count: 5 },
];

const archives = [
  { label: 'March 2022', count: 1 },
  { label: 'December 2021', count: 2 },
  { label: 'September 2021', count: 9 },
];

const galleryImages = [
  'https://images.pexels.com/photos/16282318/pexels-photo-16282318.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/8837261/pexels-photo-8837261.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/17382268/pexels-photo-17382268.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/7640743/pexels-photo-7640743.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/9099824/pexels-photo-9099824.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/38390573/pexels-photo-38390573.jpeg?auto=compress&cs=tinysrgb&w=300',
];

const tags = ['Automate', 'Business', 'Company', 'Excuse', 'Goodness', 'Happen', 'Instruments', 'Postman', 'Sales', 'Success'];

function SectionHeading({ title }) {
  return (
    <div className="mb-5">
      <h4 className="text-base font-bold text-slate-900">{title}</h4>
      <div className="mt-1.5 w-8 h-0.5 bg-red-600 rounded-full" />
    </div>
  );
}

export default function ServicesSidebar() {
  return (
    <aside className="lg:col-span-1 space-y-8 sticky top-4">
      {/* Search */}
      <div>
        <div className="flex gap-0">
          <input
            type="text"
            placeholder="Search Here..."
            className="flex-1 px-4 py-2.5 border border-slate-200 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-slate-700 placeholder:text-slate-400"
          />
          <button className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-r-lg transition-colors whitespace-nowrap">
            Search
          </button>
        </div>
      </div>

      {/* Category List */}
      <div>
        <SectionHeading title="Category List" />
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat.label}>
              <button className="w-full flex items-center justify-between py-2 text-sm text-slate-600 hover:text-red-600 transition-colors group">
                <span className="flex items-center gap-2.5">
                  <Folder className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors flex-shrink-0" />
                  {cat.label}
                </span>
                <span className="text-xs text-slate-500 group-hover:text-red-500 transition-colors">
                  {cat.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Archives */}
      <div>
        <SectionHeading title="Archives" />
        <ul className="space-y-1">
          {archives.map((arc) => (
            <li key={arc.label}>
              <button className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-red-600 transition-colors group py-1.5">
                <Folder className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors flex-shrink-0" />
                {arc.label} ({arc.count})
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Gallery */}
      <div>
        <SectionHeading title="Gallery" />
        <div className="grid grid-cols-3 gap-1.5">
          {galleryImages.map((img, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <SectionHeading title="Tags" />
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1.5 border border-slate-200 text-slate-600 text-xs font-medium rounded hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-all"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
