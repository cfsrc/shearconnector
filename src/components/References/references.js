import * as React from 'react'
import RefData from '../../../content/references.yaml';
import ReferenceEntry from "./reference-entry"

function References() {

  return (
    <div
      id="references">
        <h1 className="text-left text-4xl font-black text-gray-500 mt-4 ml-8">
        References
        </h1>
    <div className="bg-gray-100 mt-4 mx-4 mb-8 py-4 rounded grid grid-cols-2 gap-2">
      {RefData.content.map(data => {
        return (<ReferenceEntry text={data.item} />);
      })}
      </div>
    </div>
  );
}

export default References;