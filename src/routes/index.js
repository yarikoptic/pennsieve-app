import { debounce } from 'throttle-debounce';
import { PublicationStatus, PublicationTabs, PublicationTabStatuses } from '@/utils/constants.js'

/**
 * Explore Components
 */
const App = () => import('../components/app/App.vue')
const NotFound = () => import('./not-found/NotFound.vue')
const BfNavigation = () => import('../components/bf-navigation/BfNavigation.vue')
const BfNavigationSecondary = () => import('../components/bf-navigation/BfNavigationSecondary.vue')
const Login = () => import('./login/Login.vue')
const Viewer = () => import('../components/viewer/BfViewer/BfViewer.vue')
const ResetPassword = () => import('./ResetPassword/ResetPassword.vue')
const DocsLogin = () => import('./DocsLogin/DocsLogin.vue')
const JupyterLogin = () => import('./JupyterLogin/JupyterLogin.vue')
const CreateAccount = () => import('./CreateAccount/CreateAccount.vue')
const CreateOrg = () => import('./CreateOrg/CreateOrg.vue')

/**
 * User Onboarding Components
 */
const Welcome = () => import('./welcome/Welcome.vue')
const TermsOfService = () => import('./TermsOfService/TermsOfService.vue')
const SetupProfile = () => import('../components/SetupProfile/SetupProfile.vue')
const SetupFederatedLogin = () => import('../components/SetupFederatedLogin/SetupFederatedLogin.vue')
const InvitePeople = () => import('../components/onboarding/InvitePeople/InvitePeople.vue')
const FinalizeAccount = () => import('../components/FinalizeAccount/FinalizeAccount.vue')


/**
 * People Components
 */
const People = () => import('./people/People.vue')
const PeopleList = () => import('../components/people/list/PeopleList.vue')

/**
 * Publishing Components
 */
// const PublishingPage = () => import('@/components/Publishing/PublishingPage.vue')
const Publishing = () => import('@/routes/Publishing/PublishingView.vue')
const PublishingDatasetsList = () => import ('@/components/Publishing/PublishingDatasetsList/PublishingDatasetsList.vue')
const PublishingProposalsList = () => import ('@/components/Publishing/PublishingProposalsList/PublishingProposalsList.vue')

/**
 * Integrations Components
 */
const Integrations = () => import('@/routes/Integrations/Integrations.vue')
const IntegrationsList = () => import ('@/components/Integrations/IntegrationsList/IntegrationsList.vue')
const ApplicationsList = () => import ('@/components/Integrations/applicationsList/ApplicationsList.vue')



/**
 * Teams Components
 */
const Teams = () => import('./teams/Teams.vue')
const TeamsList = () => import('../components/teams/list/TeamsList.vue')
const TeamMembers = () => import('./team-members/TeamMembers.vue')
const TeamMembersList = () => import('../components/teams/members/TeamMembersList.vue')

/**
 * Settings Components
 */
const Settings = () => import('./settings/Settings.vue')
const OrgSettings = () => import('../components/settings/OrgSettings.vue')
const MySettings = () => import('./my-settings/MySettings.vue')
const MySettingsContainer = () => import('../components/my-settings/MySettingsContainer.vue')

/**
 * Dataset Components
 */
const Datasets = () => import('./datasets/Datasets.vue')

const BfDatasetList = () => import('../components/datasets/dataset-list/BfDatasetList.vue')
const BfDatasetFiles = () => import('../components/datasets/files/BfDatasetFiles.vue')
const BfDatasetFilesDeleted = () => import('../components/datasets/files/BfDatasetFilesDeleted.vue')
const BfDatasetCollaborators = () => import('../components/datasets/collaborators/BfDatasetCollaborators.vue')
const DatasetPermissions = () => import('../components/datasets/DatasetPermissions/DatasetPermissions.vue')
const DatasetActivity = () => import('../components/datasets/DatasetActivity/DatasetActivity.vue')
const EmbargoedPermissions = () => import('../components/datasets/DatasetPermissions/EmbargoedPermissions/EmbargoedPermissions.vue')
const BfDatasetSettings = () => import('../components/datasets/settings/BfDatasetSettings.vue')
const BfPublishingSettings = () => import('../components/datasets/settings/BfPublishingSettings.vue')
const DatasetIntegrationsSettings = () => import('../components/datasets/settings/DatasetIntegrationsSettings.vue')
const DatasetOverview = () => import('../components/datasets/DatasetOverview/DatasetOverview.vue')
const DatasetManifests = () => import('../components/datasets/DatasetActivity/DatasetManifests.vue')
const DatasetActivityLog = () => import('../components/datasets/DatasetActivity/DatasetActivityLog')

/**
 * Explore Components
 */
const ActivityRoute = () => import('./activity/Activity')
const ExploreRoute = () => import('./explore/Explore.vue')
const DatasetRecords = () => import('../components/datasets/records/DatasetRecords/DatasetRecords.vue')
const RecordsOverview = () => import('../components/datasets/records/RecordsOverview/RecordsOverview.vue')
const GraphBrowser = () => import('../components/datasets/records/GraphBrowser/GraphBrowser.vue')
const ModelRecords = () => import('../components/datasets/explore/search/ModelRecords')
const ConceptInstance = () => import('../components/datasets/explore/ConceptInstance/ConceptInstance.vue')
const GraphManagementRoute = () => import('./GraphManagement/GraphManagement.vue')
const GraphManagement = () => import('../components/datasets/management/GraphManagement/GraphManagement.vue')
const Models = () => import('../components/datasets/management/GraphManagement/Models.vue')
const RelationshipTypes = () => import('../components/datasets/management/GraphManagement/RelationshipTypes.vue')
const ConceptManagement = () => import('../components/datasets/management/ConceptManagement/ConceptManagement.vue')
const ModelTemplates = () => import('../components/datasets/management/ModelTemplates/ModelTemplates.vue')

/**
 * 404
 */
const Bf404 = () => import('../components/Bf-404/Bf-404.vue')

/**
 * ORCIDRedirect
 * ORCIDRedirect
 */

const ORCIDRedirect = () => import('../components/ORCID/ORCIDRedirect.vue')
const ORCID = () => import('../components/ORCID/ORCID.vue')

/**
 * WelcomeOrg
 */
const WelcomePage = () => import('./welcomePage/WelcomePage.vue')
const SubmitDatastPage = () => import('./welcomePage/SubmitDatasetPage.vue')

const WelcomeInfo = () => import('../components/welcome/Welcome.vue')
const SubmitDatasets = () => import('../components/welcome/SubmitDatasets.vue')
const PennsieveInfo = () => import('../components/welcome/Info.vue')

const routes = [

  /**
   * Welcome Org routes
   */
  {
    path: '/:orgId/overview',
    components: {
      page: WelcomePage,
      navigation: BfNavigation
    },
    props: true,
    children: [
      {
        name: 'welcome',
        path: '',
        components: {
          stage: WelcomeInfo
        }
      },
    ],
  },
  {
    path: '/:orgId/submit',
    components: {
      page: SubmitDatastPage,
      navigation: BfNavigation
    },
    props: true,
    children: [
      {
        name: 'submit',
        path: '',
        components: {
          stage: SubmitDatasets
        }
      },
    ],
  },
  {
    path: '/:orgId/info',
    components: {
      page: WelcomePage,
      navigation: BfNavigation
    },
    props: true,
    children: [
      {
        name: 'info',
        path: '',
        components: {
          stage: PennsieveInfo
        }
      },
    ],
  },

  /**
   * Datasets routes
   */
  {
    path: '/:orgId/datasets',
    components: {
      page: Datasets,
      navigation: BfNavigation
    },
    props: true,
    children: [
      {
        name: 'datasets-list',
        path: '',
        components: {
          stage: BfDatasetList
        },
        props: true
      }
    ]
  },
  {
    name: 'integrations',
    path: '/:orgId/integrations',
    components: {
      page: Integrations,
      navigation: BfNavigation
    },
    redirect: {
      name: 'applications'
    },
    props: true,
    children: [
      {
        name: 'applications',
        path: 'applications',
        components: {
          stage: ApplicationsList,
        },
        props: true
      },
      {
        name: 'webhooks',
        path: 'webhooks',
        components: {
          stage: IntegrationsList,
        },
        props: true
      },
    ]
  },
  {
    path: '/:orgId/datasets/:datasetId',
    components: {
      page: Datasets,
      navigation: BfNavigation,
      navigationSecondary: BfNavigationSecondary
    },
    children: [
      {
        name: 'metadata',
        path: 'metadata',
        components: {
          stage: ExploreRoute
        },
        props: true,
        redirect: {
          name: 'records'
        },
        children: [
          {
            path: 'model/:conceptId',
            name: 'model',
            props: true,
            components: {
              stage: ConceptManagement
            }
          },
          {
            path: 'management',
            name: 'management',
            props: {
              stage: true
            },
            components: {
              stage: DatasetRecords
            },
            redirect: {
              name: 'records'
            },
            children: [
              {
                path: 'records',
                name: 'records',
                props: {
                  stage: true
                },
                components: {
                  stage: ModelRecords
                }
              },
              {
                path: 'models',
                name: 'models',
                props: {
                  stage: true
                },
                components: {
                  stage: Models
                }
              },
              {
                path: 'relationships',
                name: 'relationships',
                props: {
                  stage: true
                },
                components: {
                  stage: RelationshipTypes
                }
              },
              {
                path: 'graph',
                name: 'graph',
                props: {
                  stage: true
                },
                components: {
                  stage: GraphBrowser
                }
              },

            ]
          },
          {
            path: 'record/:conceptId/:instanceId',
            name: 'concept-instance',
            props: true,
            meta: {
              headerAux: true
            },
            components: {
              stage: ConceptInstance
            }
          },
        ]
      },
      {
        name: 'dataset-files',
        path: 'files',
        components: {
          stage: BfDatasetFiles
        },
        props: true,
        children: [
          {
            name: 'collection-files',
            path: ':fileId',
            props: true
          },
          {
            name: 'collection-files-deleted',
            path: ':fileId',
            props: true
          }
        ]
      },
      {
        path: 'files/:conceptId/:instanceId',
        name: 'file-record',
        props: true,
        components: {
          stage: ConceptInstance
        }
      },
      {
        name: 'dataset-collaborators',
        path: 'collaborators',
        redirect: {
          name: 'dataset-permissions'
        }
      },
      {
        path: 'activity',
        components: {
          stage: ActivityRoute
        },
        props: true,
        children: [
          {
            path: '',
            name: 'activity',
            props: {
              stage: true
            },
            components: {
              stage: DatasetActivity
            },
            redirect: {
              name: 'activity-log'
            },
            children: [
              {
                name: 'activity-log',
                path: 'logs',
                components: {
                  stage: DatasetActivityLog
                },
                props: {
                  stage: true
                }
              },
              {
                name: 'upload-manifests',
                path: 'manifests',
                components: {
                  stage: DatasetManifests
                },
                props: {
                  stage: true
                }
              },
            ]
          },
        ]
      },
      {
        name: 'dataset-permissions',
        path: 'permissions',
        components: {
          stage: DatasetPermissions
        },
        props: {
          stage: true
        }
      },
      {
        name: 'embargoed-permissions',
        path: 'embargoed-permissions',
        components: {
          stage: EmbargoedPermissions
        },
        props: {
          stage: true
        }
      },
      {
        name: 'dataset-settings',
        path: 'settings',
        components: {
          stage: BfDatasetSettings
        },
        props: true
      },
      {
        name: 'publishing-settings',
        path: 'publishing-settings',
        components: {
          stage: BfPublishingSettings
        },
        props: true
      },
      {
        name: 'integrations-settings',
        path: 'integrations-settings',
        components: {
          integration: Integrations,
          stage: DatasetIntegrationsSettings
        },
        props: true
      },
      {
        name: 'dataset-overview',
        path: 'overview',
        components: {
          stage: DatasetOverview
        },
        props: {
          stage: true
        }
      },
      {
        name: 'dataset',
        path: '',
        redirect: 'overview'
      },
      {
        name: 'explore',
        path: 'explore',
        redirect: 'records'
      }
    ]
  },

  /**
   * Other routes
   */
  {
    name: 'viewer',
    path: '/:orgId/datasets/:datasetId/viewer/:fileId',
    components: {
      page: Viewer
    },
    props: true
  },
  {
    name: 'create-account',
    path: '/sign-up',
    components: {
      page: CreateAccount
    },
    props: true
  },
  {
    name: 'create-org',
    path: '/:orgId/create-org',
    components: {
      page: CreateOrg,
      navigation: BfNavigation
    },
    props: true
  },
  {
    path: '/:orgId/people',
    components: {
      page: People,
      navigation: BfNavigation
    },
    children: [
      {
        name: 'people-list',
        path: '',
        components: {
          stage: PeopleList
        }
      },
    ],
    props: true
  },
  {
    path: '/:orgId/teams',
    components: {
      page: Teams,
      navigation: BfNavigation
    },
    children: [
      {
        name: 'teams-list',
        path: '',
        components: {
          stage: TeamsList
        }
      },
    ],
    props: true
  },
  {
    name: 'publishing',
    path: '/:orgId/publishing',
    redirect: {
      name: PublicationTabs.REVIEW
    },
    components: {
      page: Publishing,
      navigation: BfNavigation
    },
    children: [
      {
        name: PublicationTabs.REVIEW,
        path: PublicationTabs.REVIEW,
        components: {
          stage: PublishingDatasetsList
        },
        props: {
          stage: {
            publicationStatus: [PublicationStatus.REQUESTED, PublicationStatus.ACCEPTED, PublicationStatus.FAILED],
          }
        }
      },
      {
        name: PublicationTabs.PUBLISHED,
        path: PublicationTabs.PUBLISHED,
        components: {
          stage: PublishingDatasetsList
        },
        props: {
          stage: {
            publicationStatus: [PublicationStatus.COMPLETED],
          }
        }
      },
      {
        name: PublicationTabs.REJECTED,
        path: PublicationTabs.REJECTED,
        components: {
          stage: PublishingDatasetsList
        },
        props: {
          stage: {
            publicationStatus: [PublicationStatus.REJECTED],
          }
        }
      },
      {
        name: PublicationTabs.PROPOSED,
        path: PublicationTabs.PROPOSED,
        components: {
          stage: PublishingProposalsList
        },
        props: {
          stage: {
            publicationStatus: [PublicationStatus.PROPOSED],
          }
        }
      }
    ],
    props: true
  },
  {
    path: '/:orgId/teams/:id',
    components: {
      page: TeamMembers,
      navigation: BfNavigation
    },
    children: [
      {
        name: 'team-members-list',
        path: '',
        components: {
          stage: TeamMembersList
        }
      },
    ],
    props: true
  },
  {
    path: '/:orgId/settings',
    components: {
      page: Settings,
      navigation: BfNavigation
    },
    children: [
      {
        name: 'settings',
        path: '',
        components: {
          stage: OrgSettings
        }
      },
    ],
    props: true
  },
  {
    path: '/:orgId/profile',
    components: {
      page: MySettings,
      navigation: BfNavigation
    },
    children: [
      {
        name: 'my-settings-container',
        path: '',
        components: {
          stage: MySettingsContainer
        }
      },
    ],
    props: true
  },
  {
    name: 'invitation',
    path: '/invitation',
    components: {
      page: Welcome
    },
    children: [
      {
        name: 'setup-profile-accept',
        path: 'accept/:username/:password',
        components: {
          stage: SetupProfile
        }
      },
      {
        name: 'verify-account',
        path: 'verify/:username/:password',
        components: {
          stage: FinalizeAccount
        }
      },
    ]
  },
  {
    name: 'setup',
    path: '/:orgId/welcome',
    components: {
      page: Welcome
    },
    children: [
      {
        name: 'setup-profile',
        path: 'setup-profile',
        components: {
          stage: SetupProfile
        }
      },
      {
        name: 'federated-sign-up',
        path: 'federated-sign-up',
        components: {
          stage: SetupFederatedLogin
        }
      },
      {
        name: 'terms-of-service',
        path: 'terms-of-service',
        components: {
          stage: TermsOfService
        },
        props: true
      },
      {
        name: 'invite-people',
        path: 'invite-people',
        components: {
          stage: InvitePeople
        },
        props: true
      }
    ]
  },
  {
    name: 'password',
    path: '/password',
    components: {
      page: ResetPassword
    },
    props: {
      page: (route) => {
        return { resetToken: route.query.resetToken }
      }
    }
  },
  {
    name: 'welcome-to-pennsieve',
    path: '/welcome-to-pennsieve',
    components: {
      page: ResetPassword
    }
  },
  {
    path: '/orcid-redirect',
    components: {
      page: ORCID
    },
    children: [
      {
        name: 'orcid-redirect',
        path: '',
        components: {
          stage: ORCIDRedirect
        }
      },
    ],
  },
  {
    name: 'home',
    path: '/',
    components: {
      page: Login
    },
    props: true
  },
  {
    name: 'jupyter-login',
    path: '/jupyter-login',
    components: {
      page: JupyterLogin
    }
  },
  {
    name: 'docs-login',
    path: '/docs-login',
    components: {
      page: DocsLogin
    }
  },
  /**
   * Redirects from old URLs
   */
  {
    path: '/:orgId/data-catalog',
    redirect: '/:orgId/datasets'
  },
  {
    path: '/:orgId/data-catalog/:id',
    redirect: '/:orgId/datasets/:id'
  },
  {
    path: '/:orgId/settings/members',
    redirect: '/:orgId/people'
  },
  {
    path: '/:orgId/settings/profile',
    redirect: '/:orgId/profile'
  },
  {
    path: '/:orgId/settings/api-keys',
    redirect: '/:orgId/profile'
  },
  {
    path: '/:orgId/settings/teams',
    redirect: '/:orgId/teams'
  },
  {
    path: '/:orgId/datasets/:datasetId/graph-management',
    redirect: '/:orgId/datasets/:datasetId/graph-management/models'
  },
  {
    path: '*',
    components: {
      page: NotFound,
      navigation: BfNavigation
    },
    children: [
      {
        name: 'page-not-found',
        path: '',
        components: {
          stage: Bf404
        }
      },
    ],
    props: true
  },

]

export default routes
