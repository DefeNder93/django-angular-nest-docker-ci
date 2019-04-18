module.exports = {
  name: "django-angular-nest-docker-ci",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/django-angular-nest-docker-ci/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
