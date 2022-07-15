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
import ActivityTrackingSchema from './schemas/activity-tracking';

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
  ActivityTracking: ActivityTrackingSchema,
};
