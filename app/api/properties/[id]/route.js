import connectDB from '@/config/database';
import Property from '@/models/Property';

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const { id } = await params;
    const property = await Property.findById(id);

    if (!property) return new Response('Property not found', { status: 404 });

    return new Response(property, {
      status: 200,
    });
  } catch (error) {
    return new Response('Something went wrong', { status: 500 });
  }
};
