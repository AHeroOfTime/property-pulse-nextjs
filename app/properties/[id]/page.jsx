// ... acts as a catch all. any URL after the id (pulse.com/propertiers/{id}/...) will still load
// folder must be name [...id]

const PropertyPage = async ({ params }) => {
  // asynchronous access of 'params.id'
  const { id } = await params;

  return <div>Property Page {id}</div>;
};

export default PropertyPage;
