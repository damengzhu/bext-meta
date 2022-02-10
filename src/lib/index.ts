import {
  alook_install,
  bz_install,
  hiker_install,
  lit_install,
  lit_installed,
  lit_uninstall,
  m_install,
  meta_install,
  meta_installed,
  meta_uninstall,
  mixia_install,
  mt_install,
  shark_install,
  shark_installed,
  shark_uninstall,
  unknown_install,
  via_install,
  via_installed,
  via_uninstall,
  x_install,
  x_installed,
  x_uninstall,
} from '@bext/browser';
import { buildMethods } from '@bext/browser';

export const browser = buildMethods({
  alook_install,
  bz_install,
  hiker_install,
  lit_install,
  lit_installed,
  lit_uninstall,
  m_install,
  meta_install,
  meta_installed,
  meta_uninstall,
  mixia_install,
  mt_install,
  shark_install,
  shark_installed,
  shark_uninstall,
  via_install,
  via_installed,
  via_uninstall,
  x_install,
  x_installed,
  x_uninstall,
  unknown_install,
});

export { default as LIB_UI_DTS } from '!!raw-loader!./ui.d.ts';
export { default as LIB_UTIL_DTS } from '!!raw-loader!./util.d.ts';
export { default as LIB_CONTEXT_DTS } from '!!raw-loader!./context.d.ts';
