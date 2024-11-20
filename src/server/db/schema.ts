// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql, relations } from "drizzle-orm";
import { index, int, integer, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `oldmans_${name}`);

export const posts = createTable(
  "post",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const users = createTable("user", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  clerkId: text("clerk_id").notNull(),
  role: text("role").notNull(),
  name: text("name").notNull(),
  birthday: int("birthday", { mode: "timestamp" }),
  finishedSetup: integer("finished_setup", { mode: "boolean" }).default(false),
  createdAt: int("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date()),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

export const events = createTable("event", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  location: text("location").notNull(),
  date: int("date", { mode: "timestamp" }).notNull(),
  createdAt: int("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date()),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

export const eventAttendees = createTable(
  "event_attendee",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    eventId: integer("event_id", { mode: "number" })
      .notNull()
      .references(() => events.id),
    userId: integer("user_id", { mode: "number" })
      .notNull()
      .references(() => users.id),
    createdAt: int("created_at", { mode: "timestamp" })
      .$defaultFn(() => new Date()),
  },
  (table) => ({
    eventUserIdx: index("event_user_idx").on(table.eventId, table.userId),
  })
);

export const eventsRelations = relations(events, ({ many }) => ({
  eventAttendees: many(eventAttendees),
}));

export const eventAttendeesRelations = relations(eventAttendees, ({ one }) => ({
  event: one(events, {
    fields: [eventAttendees.eventId],
    references: [events.id],
  }),
  user: one(users, {
    fields: [eventAttendees.userId],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  eventAttendees: many(eventAttendees),
}));
