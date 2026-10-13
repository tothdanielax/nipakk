import { CATALOG, type Package } from '@nipakk/core/catalog';
import { Heading } from '@nipakk/ui/components/heading';
import { PackageOption } from './package-option';

type Props = {
  selection: readonly Package[];
  onToggle: (pkg: Package) => void;
};

export const PackagePicker = ({ selection, onToggle }: Props) => {
  const selectedSlugs = new Set(selection.map((pkg) => pkg.slug));

  return (
    <div className='grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5'>
      {CATALOG.map((category) => (
        <section key={category.name}>
          <Heading as='h2' className='mb-1.5 text-sm font-medium uppercase'>
            {category.name}
          </Heading>
          <ul className='space-y-0.5'>
            {category.packages.map((pkg) => (
              <li key={pkg.slug}>
                <PackageOption
                  pkg={pkg}
                  isSelected={selectedSlugs.has(pkg.slug)}
                  onToggle={() => onToggle(pkg)}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
