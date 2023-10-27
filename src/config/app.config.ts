interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager'],
  tenantName: 'Organization',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read job information',
    'Read organization information',
    'Manage personal user information',
    'Read leave status',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage organizations',
    'Manage jobs',
    'Manage employee records',
    'Manage attendance records',
    'Manage leaves',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/05acacd2-882e-4288-958e-27e74fa50a2b',
};
