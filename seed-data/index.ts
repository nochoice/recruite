import { KeystoneContext } from '@keystone-6/core/types';
import { size } from 'lodash';
import { skills, contacts, candidates} from './data';

interface Skill {
    title: string;
    description?: string;
}

interface Contact {
    name: string;
    surname: string;
    email: string;
    phone: string;
}

interface Candidate extends Contact {
    linkedIn: string
}

export async function insertSeedData(context: KeystoneContext) {
  console.log(`🌱 Inserting seed data`);

  const createSkill = async (s: Skill) => {
    let skill = await context.query.Skill.findOne({
      where: { title: s.title },
      query: 'title',
    });

    if (!skill) {
      skill = await context.query.Skill.createOne({
        data: s,
        query: 'title',
      });
    }
  };

  const createContact = async (contact: Contact) => {
    let c = await context.query.Contact.findOne({
      where: { email: contact.email },
      query: 'email',
    });

    if (!c) {
      c = await context.query.Contact.createOne({
        data: contact,
        query: 'email',
      });
    }
  };

  const createCandidate = async (candidate: Candidate) => {
    let c = await context.query.Candidate.findOne({
      where: { email: candidate.email },
      query: 'email',
    });

    if (!c) {
      c = await context.query.Candidate.createOne({
        data: candidate,
        query: 'email',
      });
    }
  };



//   const createTask = async (taskData: TaskProps) => {
//     let persons = await context.query.Person.findMany({
//       where: { name: { equals: taskData.assignedTo } },
//       query: 'id',
//     });

//     taskData.assignedTo = { connect: { id: persons[0].id } };

//     await context.query.Task.createOne({
//       data: taskData,
//       query: 'id',
//     });
//   };

  for (const skill of skills) {
    console.log(`👩 Adding skill: ${skill.title}`);
    await createSkill(skill);
  }

  for (const contact of contacts) {
    console.log(`👩 Adding contact: ${contact.surname}`);
    await createContact(contact);
  }

  for (const candidate of candidates) {
    console.log(`👩 Adding contact: ${candidate.surname}`);
    await createCandidate(candidate);
  }

  console.log(`✅ Seed data inserted`);
  console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
  process.exit();
}