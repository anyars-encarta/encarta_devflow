import { NextResponse } from "next/server";

import {tickets} from "@/app/database";

// Get By ID // Path: app/api/tickets/[id]/route.ts
export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const ticket = tickets.find((ticket) => ticket.id === parseInt(id));

  return NextResponse.json(ticket);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { name, status, type } = await request.json();

  const ticket = tickets.find((ticket) => ticket.id === parseInt(id));

  if(!ticket) return NextResponse.json(new Error("Ticket not found"), {status: 404});

  if(name) ticket.name = name;
  if(status) ticket.status = status;
  if(type) ticket.type = type;

  return NextResponse.json(ticket);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const ticket = tickets.find((ticket) => ticket.id === parseInt(id));

  if(!ticket) return NextResponse.json(new Error("Ticket not found"), {status: 404});

  const index = tickets.indexOf(ticket);
  tickets.splice(index, 1);

  return NextResponse.json(tickets);
}
