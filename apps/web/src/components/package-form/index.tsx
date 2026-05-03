import { Heading } from '@nipakk/ui/components/typography';
import { PACKAGES, type Package } from '@/constants';
import { splitPackages } from '@/utils/packages';
import { PackageItem } from './package-form-item';

type Props = {
  selectedPackages: Package[];
  togglePackage: (pkg: Package) => void;
};

export const PackageForm = ({ selectedPackages, togglePackage }: Props) => {
  const columns = splitPackages(PACKAGES);

  return (
    <div className='mx-auto grid w-full max-w-5xl grid-cols-1 gap-x-8 gap-y-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {columns.map(([category, items]) => (
        <div key={category} className='space-y-1.5'>
          <Heading weight='medium' className='mb-1 uppercase'>
            {category.replace(/_/g, ' ')}
          </Heading>
          <div className='space-y-0.5'>
            {items.map((item) => (
              <PackageItem
                key={item.slug}
                item={item}
                isSelected={selectedPackages.some((p) => p.slug === item.slug)}
                onToggle={() => togglePackage(item)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
