import { betterAuth } from "better-auth";
import { PostgresDialect } from 'kysely';
import { Pool } from 'pg';

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'campusbook',
    host: 'localhost',
    user: 'campusbook',
    password: 'campusbook',
    port: 5433,
    max: 10,
  })
});

export const auth = betterAuth({
  database: {
    dialect: dialect,
    type: 'postgres',
  },
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {  
    enabled: false
  },
  socialProviders: { 
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID as string, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,  
    },
  },
  user: {
    fields: {
      id: 'id',
      email: 'email',
      name: 'name',
      image: 'image',      
    },
    additionalFields: {
      emailVerified: {
        type: "date",
        fieldName: "email_verified",
        defaultValue: 'now()',
      },
      phoneNumber: {
        type: "number",
        fieldName: "phone_number",
        defaultValue: null,
      },
      createdAt: {
        type: "date",
        fieldName: "created_at",
        defaultValue: 'now()',
      },
      updatedAt: {
        type: "date",
        fieldName: "updated_at",
        defaultValue: 'now()',
      },
    }
  },
})