import type { Struct, Schema } from '@strapi/strapi';

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    ext: Schema.Attribute.String;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    related: Schema.Attribute.Relation<'morphToMany'>;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    >;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    >;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    >;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    entryDocumentId: Schema.Attribute.String;
    locale: Schema.Attribute.String;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    name: 'Workflow';
    description: '';
    singularName: 'workflow';
    pluralName: 'workflows';
    displayName: 'Workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    name: 'Workflow Stage';
    description: '';
    singularName: 'workflow-stage';
    pluralName: 'workflow-stages';
    displayName: 'Stages';
  };
  options: {
    version: '1.1.0';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    timestamps: true;
    draftAndPublish: false;
  };
  attributes: {
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiAbdomenTuckAbdomenTuck extends Struct.CollectionTypeSchema {
  collectionName: 'abdomen_tucks';
  info: {
    singularName: 'abdomen-tuck';
    pluralName: 'abdomen-tucks';
    displayName: 'Abdomen Tuck';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::abdomen-tuck.abdomen-tuck'
    >;
  };
}

export interface ApiArmTuckArmTuck extends Struct.CollectionTypeSchema {
  collectionName: 'arm_tucks';
  info: {
    singularName: 'arm-tuck';
    pluralName: 'arm-tucks';
    displayName: 'Arm Tuck';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::arm-tuck.arm-tuck'
    >;
  };
}

export interface ApiBackTuckBackTuck extends Struct.CollectionTypeSchema {
  collectionName: 'back_tucks';
  info: {
    singularName: 'back-tuck';
    pluralName: 'back-tucks';
    displayName: 'Back Tuck';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::back-tuck.back-tuck'
    >;
  };
}

export interface ApiCarbonLaserCarbonLaser extends Struct.CollectionTypeSchema {
  collectionName: 'carbon_lasers';
  info: {
    singularName: 'carbon-laser';
    pluralName: 'carbon-lasers';
    displayName: 'carbon_laser';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::carbon-laser.carbon-laser'
    >;
  };
}

export interface ApiCarouselCarousel extends Struct.CollectionTypeSchema {
  collectionName: 'carousels';
  info: {
    singularName: 'carousel';
    pluralName: 'carousels';
    displayName: 'carousel';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading_text: Schema.Attribute.String;
    text: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::carousel.carousel'
    >;
  };
}

export interface ApiCarrerCarrer extends Struct.CollectionTypeSchema {
  collectionName: 'carrers';
  info: {
    singularName: 'carrer';
    pluralName: 'carrers';
    displayName: 'career';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    job_opening: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::carrer.carrer'>;
  };
}

export interface ApiCelloCello extends Struct.CollectionTypeSchema {
  collectionName: 'cellos';
  info: {
    singularName: 'cello';
    pluralName: 'cellos';
    displayName: 'Cello';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::cello.cello'>;
  };
}

export interface ApiChemicalPeelChemicalPeel
  extends Struct.CollectionTypeSchema {
  collectionName: 'chemical_peels';
  info: {
    singularName: 'chemical-peel';
    pluralName: 'chemical-peels';
    displayName: 'chemical_peel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::chemical-peel.chemical-peel'
    >;
  };
}

export interface ApiCombinationsPeelCombinationsPeel
  extends Struct.CollectionTypeSchema {
  collectionName: 'combinations_peels';
  info: {
    singularName: 'combinations-peel';
    pluralName: 'combinations-peels';
    displayName: 'combinations_peel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::combinations-peel.combinations-peel'
    >;
  };
}

export interface ApiContactusContactus extends Struct.CollectionTypeSchema {
  collectionName: 'contactuses';
  info: {
    singularName: 'contactus';
    pluralName: 'contactuses';
    displayName: 'contactus';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    text: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contactus.contactus'
    >;
  };
}

export interface ApiCryoCryo extends Struct.CollectionTypeSchema {
  collectionName: 'cryos';
  info: {
    singularName: 'cryo';
    pluralName: 'cryos';
    displayName: 'Cryo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::cryo.cryo'>;
  };
}

export interface ApiDietPlansPerMonthDietPlansPerMonth
  extends Struct.CollectionTypeSchema {
  collectionName: 'diet_plans_per_months';
  info: {
    singularName: 'diet-plans-per-month';
    pluralName: 'diet-plans-per-months';
    displayName: 'Diet plans per month';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::diet-plans-per-month.diet-plans-per-month'
    >;
  };
}

export interface ApiGlutathioneGlutathione extends Struct.CollectionTypeSchema {
  collectionName: 'glutathiones';
  info: {
    singularName: 'glutathione';
    pluralName: 'glutathiones';
    displayName: 'Glutathione';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::glutathione.glutathione'
    >;
  };
}

export interface ApiGlycolicPeelGlycolicPeel
  extends Struct.CollectionTypeSchema {
  collectionName: 'glycolic_peels';
  info: {
    singularName: 'glycolic-peel';
    pluralName: 'glycolic-peels';
    displayName: 'Glycolic_peel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::glycolic-peel.glycolic-peel'
    >;
  };
}

export interface ApiGreenCoffeeAbdomenArmsHipGreenCoffeeAbdomenArmsHip
  extends Struct.CollectionTypeSchema {
  collectionName: 'green_coffee_abdomen_arms_hips';
  info: {
    singularName: 'green-coffee-abdomen-arms-hip';
    pluralName: 'green-coffee-abdomen-arms-hips';
    displayName: 'Green Coffee-Abdomen, Arms, Hip';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::green-coffee-abdomen-arms-hip.green-coffee-abdomen-arms-hip'
    >;
  };
}

export interface ApiHipTuckHipTuck extends Struct.CollectionTypeSchema {
  collectionName: 'hip_tucks';
  info: {
    singularName: 'hip-tuck';
    pluralName: 'hip-tucks';
    displayName: 'Hip Tuck';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::hip-tuck.hip-tuck'
    >;
  };
}

export interface ApiHydraFacialHydraFacial extends Struct.CollectionTypeSchema {
  collectionName: 'hydra_facials';
  info: {
    singularName: 'hydra-facial';
    pluralName: 'hydra-facials';
    displayName: 'hydra_facial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_header: Schema.Attribute.String;
    benefits_text: Schema.Attribute.Text;
    before_after_section_text: Schema.Attribute.String;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::hydra-facial.hydra-facial'
    >;
  };
}

export interface ApiLandingPageLandingPage extends Struct.CollectionTypeSchema {
  collectionName: 'landing_pages';
  info: {
    singularName: 'landing-page';
    pluralName: 'landing-pages';
    displayName: 'Landing Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_text_1: Schema.Attribute.String;
    hero_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    hero_text_2: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::landing-page.landing-page'
    >;
  };
}

export interface ApiLightPeelLightPeel extends Struct.CollectionTypeSchema {
  collectionName: 'light_peels';
  info: {
    singularName: 'light-peel';
    pluralName: 'light-peels';
    displayName: 'light_peel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::light-peel.light-peel'
    >;
  };
}

export interface ApiLipoflushLipoflush extends Struct.CollectionTypeSchema {
  collectionName: 'lipoflushes';
  info: {
    singularName: 'lipoflush';
    pluralName: 'lipoflushes';
    displayName: 'Lipoflush';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::lipoflush.lipoflush'
    >;
  };
}

export interface ApiLymphaticDrainageLymphaticDrainage
  extends Struct.CollectionTypeSchema {
  collectionName: 'lymphatic_drainages';
  info: {
    singularName: 'lymphatic-drainage';
    pluralName: 'lymphatic-drainages';
    displayName: 'Lymphatic Drainage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::lymphatic-drainage.lymphatic-drainage'
    >;
  };
}

export interface ApiNanoPeelNanoPeel extends Struct.CollectionTypeSchema {
  collectionName: 'nano_peels';
  info: {
    singularName: 'nano-peel';
    pluralName: 'nano-peels';
    displayName: 'nano_peel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::nano-peel.nano-peel'
    >;
  };
}

export interface ApiNeckNeck extends Struct.CollectionTypeSchema {
  collectionName: 'necks';
  info: {
    singularName: 'neck';
    pluralName: 'necks';
    displayName: 'Neck';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::neck.neck'>;
  };
}

export interface ApiNmNm extends Struct.CollectionTypeSchema {
  collectionName: 'nms';
  info: {
    singularName: 'nm';
    pluralName: 'nms';
    displayName: 'NM';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::nm.nm'>;
  };
}

export interface ApiPhotoFacialPhotoFacial extends Struct.CollectionTypeSchema {
  collectionName: 'photo_facials';
  info: {
    singularName: 'photo-facial';
    pluralName: 'photo-facials';
    displayName: 'photo_facial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.String;
    benefits_header: Schema.Attribute.String;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::photo-facial.photo-facial'
    >;
  };
}

export interface ApiSalieyilePeelSalieyilePeel
  extends Struct.CollectionTypeSchema {
  collectionName: 'salieyile_peels';
  info: {
    singularName: 'salieyile-peel';
    pluralName: 'salieyile-peels';
    displayName: 'salieyile peel';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::salieyile-peel.salieyile-peel'
    >;
  };
}

export interface ApiTestimonialTestimonial extends Struct.CollectionTypeSchema {
  collectionName: 'testimonials';
  info: {
    singularName: 'testimonial';
    pluralName: 'testimonials';
    displayName: 'Testimonial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    message: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    likes: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface ApiThighTuckThighTuck extends Struct.CollectionTypeSchema {
  collectionName: 'thigh_tucks';
  info: {
    singularName: 'thigh-tuck';
    pluralName: 'thigh-tucks';
    displayName: 'Thigh Tuck';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::thigh-tuck.thigh-tuck'
    >;
  };
}

export interface ApiTopConcernTopConcern extends Struct.CollectionTypeSchema {
  collectionName: 'top_concerns';
  info: {
    singularName: 'top-concern';
    pluralName: 'top-concerns';
    displayName: 'Top Concern';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::top-concern.top-concern'
    >;
  };
}

export interface ApiTopServiceTopService extends Struct.CollectionTypeSchema {
  collectionName: 'top_services';
  info: {
    singularName: 'top-service';
    pluralName: 'top-services';
    displayName: 'Top Service';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::top-service.top-service'
    >;
  };
}

export interface ApiTrustTrust extends Struct.CollectionTypeSchema {
  collectionName: 'trusts';
  info: {
    singularName: 'trust';
    pluralName: 'trusts';
    displayName: 'Trust';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reviews: Schema.Attribute.String;
    doctor_answered: Schema.Attribute.String;
    people_satisfactions: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::trust.trust'>;
  };
}

export interface ApiUlUl extends Struct.CollectionTypeSchema {
  collectionName: 'uls';
  info: {
    singularName: 'ul';
    pluralName: 'uls';
    displayName: 'UL';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::ul.ul'>;
  };
}

export interface ApiYellowPeelYellowPeel extends Struct.CollectionTypeSchema {
  collectionName: 'yellow_peels';
  info: {
    singularName: 'yellow-peel';
    pluralName: 'yellow-peels';
    displayName: 'yellow_peel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section_header: Schema.Attribute.String;
    hero_section_text: Schema.Attribute.Text;
    hero_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefits_text: Schema.Attribute.Text;
    benefits_header: Schema.Attribute.String;
    before_after_section_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    before_after_section_text: Schema.Attribute.String;
    video_section_text: Schema.Attribute.String;
    video_section_videos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    benefits_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::yellow-peel.yellow-peel'
    >;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Schema.Attribute.String;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    preferedLanguage: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'>;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'>;
  };
}

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'>;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    >;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::abdomen-tuck.abdomen-tuck': ApiAbdomenTuckAbdomenTuck;
      'api::arm-tuck.arm-tuck': ApiArmTuckArmTuck;
      'api::back-tuck.back-tuck': ApiBackTuckBackTuck;
      'api::carbon-laser.carbon-laser': ApiCarbonLaserCarbonLaser;
      'api::carousel.carousel': ApiCarouselCarousel;
      'api::carrer.carrer': ApiCarrerCarrer;
      'api::cello.cello': ApiCelloCello;
      'api::chemical-peel.chemical-peel': ApiChemicalPeelChemicalPeel;
      'api::combinations-peel.combinations-peel': ApiCombinationsPeelCombinationsPeel;
      'api::contactus.contactus': ApiContactusContactus;
      'api::cryo.cryo': ApiCryoCryo;
      'api::diet-plans-per-month.diet-plans-per-month': ApiDietPlansPerMonthDietPlansPerMonth;
      'api::glutathione.glutathione': ApiGlutathioneGlutathione;
      'api::glycolic-peel.glycolic-peel': ApiGlycolicPeelGlycolicPeel;
      'api::green-coffee-abdomen-arms-hip.green-coffee-abdomen-arms-hip': ApiGreenCoffeeAbdomenArmsHipGreenCoffeeAbdomenArmsHip;
      'api::hip-tuck.hip-tuck': ApiHipTuckHipTuck;
      'api::hydra-facial.hydra-facial': ApiHydraFacialHydraFacial;
      'api::landing-page.landing-page': ApiLandingPageLandingPage;
      'api::light-peel.light-peel': ApiLightPeelLightPeel;
      'api::lipoflush.lipoflush': ApiLipoflushLipoflush;
      'api::lymphatic-drainage.lymphatic-drainage': ApiLymphaticDrainageLymphaticDrainage;
      'api::nano-peel.nano-peel': ApiNanoPeelNanoPeel;
      'api::neck.neck': ApiNeckNeck;
      'api::nm.nm': ApiNmNm;
      'api::photo-facial.photo-facial': ApiPhotoFacialPhotoFacial;
      'api::salieyile-peel.salieyile-peel': ApiSalieyilePeelSalieyilePeel;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::thigh-tuck.thigh-tuck': ApiThighTuckThighTuck;
      'api::top-concern.top-concern': ApiTopConcernTopConcern;
      'api::top-service.top-service': ApiTopServiceTopService;
      'api::trust.trust': ApiTrustTrust;
      'api::ul.ul': ApiUlUl;
      'api::yellow-peel.yellow-peel': ApiYellowPeelYellowPeel;
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
    }
  }
}
