interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Team Member', 'Manager', 'Administrator'],
  tenantName: 'Organization',
  applicationName: 'SampleCrm',
  addOns: ['chat', 'notifications', 'file'],
};
