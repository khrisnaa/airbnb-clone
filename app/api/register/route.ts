import { db } from '@/app/libs/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const body = await req.json();

  const { name, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await db.user.create({
    data: { name, email, password: hashedPassword },
  });

  return NextResponse.json(user);
};
