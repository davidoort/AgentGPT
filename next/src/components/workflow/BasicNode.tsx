import React, { memo } from "react";
import { Handle, type NodeProps, Position } from "reactflow";
import type { WorkflowNode } from "../../types/flowchart";
import clsx from "clsx";

function BasicNode({ data }: NodeProps<Partial<WorkflowNode>>) {
  const block = data?.actionBlock;
  // const blockFields = data?.codeBlock?.blockFields;

  return (
    <div
      className={clsx(
        "border-translucent rounded-md bg-white p-3 shadow-xl shadow-gray-300 dark:border-neutral-900 dark:shadow-2xl dark:shadow-black",
        "dark:bg-stone-900 dark:text-white dark:shadow-stone-800"
      )}
    >
      <div className="flex items-center">
        {/*{block?.image && (*/}
        {/*  <div>*/}
        {/*    <Image src={block.image} alt={"Test"} width={30} height={30} />*/}
        {/*  </div>*/}
        {/*)}*/}
        <div className="ml-2">
          <div className="text-lg font-bold dark:text-gray-100">{block?.name}</div>
          {/*<div className="text-gray-500 dark:text-gray-400">{block?.description}</div>*/}
        </div>
      </div>
      {/*{blockFields && blockFields.length > 0 && <BlockFields blockFields={blockFields} />}*/}

      {block?.hasOutput && (
        <Handle
          type="target"
          position={Position.Left}
          className="bg-black dark:bg-white"
          style={{ width: "0.5em", height: "0.5em" }}
        />
      )}
      {block?.hasInput && (
        <Handle
          type="source"
          position={Position.Right}
          className="bg-black dark:bg-white"
          style={{ width: "0.5em", height: "0.5em" }}
        />
      )}
    </div>
  );
}

export default memo(BasicNode);