import React from "react";

const Tag = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <div>Rendering Tag: ${id}</div>;
};

export default Tag;
