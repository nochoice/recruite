/*
Welcome to the schema! The schema is the heart of Keystone.

Here we define our 'lists', which will then be used both for the GraphQL
API definition, our database tables, and our Admin UI layout.

Some quick definitions to help out:
A list: A definition of a collection of fields with a name. For the starter
  we have `User`, `Post`, and `Tag` lists.
A field: The individual bits of data on your list, each with its own type.
  you can see some of the lists in what we use below.

*/

// Like the `config` function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.
import { list } from '@keystone-6/core';

// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.
import {
  text,
  relationship,
} from '@keystone-6/core/fields';
// The document field is a more complicated field, so it's in its own package
// Keystone aims to have all the base field types, but you can make your own
// custom ones.

// We are using Typescript, and we want our types experience to be as strict as it can be.
// By providing the Keystone generated `Lists` type to our lists object, we refine
// our types to a stricter subset that is type-aware of other lists in our schema
// that Typescript cannot easily infer.
import { Lists } from '.keystone/types';
import UserSchema from './schemas/user';
import PostSchema from './schemas/post';
import CompanySchema from './schemas/company';
import InterviewSchema from './schemas/interview';
import CandidateSchema from './schemas/candidate';
import CandidateSkillSchema from './schemas/candidate-skill';
import CandidateWatchSchema from './schemas/candidate_watch';
import AddressSchema from './schemas/address';
import ContactSchema from './schemas/contact';
import ContactTypeSchema from './schemas/contact-type';
import PositionSchema from './schemas/position';
import SkillSchema from './schemas/skill';
import CandidateDocumentSchema from './schemas/candidate-document';

export const lists: Lists = {
  User: UserSchema,
  // Post: PostSchema,
  Company: CompanySchema,
  Interview: InterviewSchema,
  Candidate: CandidateSchema,
  CandidateSkill: CandidateSkillSchema,
  CandidateDocument: CandidateDocumentSchema,
  Contact: ContactSchema,
  ContactType: ContactTypeSchema,
  Position: PositionSchema,
  // CandidateWatch: CandidateWatchSchema,
  Address: AddressSchema,
  Skill: SkillSchema,

  // Tag: list({
  //   ui: {
  //     isHidden: true,
  //   },
  //   fields: {
  //     name: text(),
  //     posts: relationship({ ref: 'Post.tags', many: true }),
  //   },
  // }),
};
