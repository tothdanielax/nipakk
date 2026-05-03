import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

const { fieldContext, formContext } = createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {},
  formComponents: {}
});
