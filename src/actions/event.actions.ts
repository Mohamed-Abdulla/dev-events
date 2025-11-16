"use server";

import connectDB from "@/lib/mongodb";
import { Event } from "../../database";

export async function createEventAction(formData: FormData) {
  await connectDB();

  try {
    const raw = Object.fromEntries(formData.entries());

    // Convert repeated fields (agenda[], tags[]) properly
    const agenda = formData.getAll("agenda") as string[];
    const tags = formData.getAll("tags") as string[];

    const eventData = {
      ...raw,
      agenda,
      tags,
    };

    const createdEvent = await Event.create(eventData);

    return {
      success: true,
      message: "Event created successfully",
      event: JSON.parse(JSON.stringify(createdEvent)),
    };
  } catch (e: any) {
    return {
      success: false,
      message: "Event Creation Failed",
      error: e.message || "Unknown error",
    };
  }
}

//get all events
export const getAllEvents = async () => {
  try {
    await connectDB();
    return await Event.find({}).lean();
  } catch {
    return [];
  }
};

export const getSimilarEventsBySlug = async (slug: string) => {
  try {
    await connectDB();
    const event = await Event.findOne({ slug });

    return await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean();
  } catch {
    return [];
  }
};

//get event by slug
export const getEventBySlug = async (slug: string) => {
  try {
    await connectDB();
    const events = await Event.find().sort({ createdAt: -1 });
    return events;
  } catch {
    return null;
  }
};
