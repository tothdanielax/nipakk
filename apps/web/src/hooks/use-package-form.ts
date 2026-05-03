import { useStore } from '@tanstack/react-form';
import { type Package } from '@/constants';
import { useAppForm } from './use-app-form';
import { toast } from 'sonner';

export const usePackageForm = () => {
  const form = useAppForm({
    defaultValues: {
      packages: [] as Package[]
    },
    validators: {
      onSubmit: ({ value }) => {
        if (value.packages.length === 0) {
          return 'At least one item must be selected';
        }

        return undefined;
      }
    }
  });

  const selectedPackages = useStore(form.store, (state) => state.values.packages);

  const togglePackage = (pkg: Package) => {
    const isSelected = selectedPackages.some((p) => p.slug === pkg.slug);

    form.setFieldValue(
      'packages',
      isSelected ? selectedPackages.filter((p) => p.slug !== pkg.slug) : [...selectedPackages, pkg]
    );
  };

  const withValidation = async (action: () => Promise<void>) => {
    await form.validate('submit');

    const { errorMap } = form.store.state;
    if (errorMap.onSubmit) {
      toast.error(errorMap.onSubmit);
      return;
    }

    await action();
  };

  return {
    form,
    selectedPackages,
    togglePackage,
    withValidation
  };
};

export type PackageFormHook = ReturnType<typeof usePackageForm>;
