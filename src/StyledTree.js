import React from 'react';
import UserLine from './UserLine';
import { Tree, TreeNode } from 'react-organizational-chart';

const StyledTree = (props) => (
    <Tree
        lineWidth={'2px'}
        lineColor={'blue'}
        lineBorderRadius={'10px'}
        label={<UserLine key="1" user={props.users[0]} roles={props.roles} />}
    >
        <TreeNode label={<UserLine key="1" user={props.users[0]} roles={props.roles} />}>
            <TreeNode label={<UserLine key="1" user={props.users[0]} roles={props.roles} />} />
        </TreeNode>
        <TreeNode label={<UserLine key="1" user={props.users[0]} roles={props.roles} />}>
            <TreeNode label={<UserLine key="1" user={props.users[0]} roles={props.roles} />}>
                <TreeNode label={<UserLine key="1" user={props.users[0]} roles={props.roles} />} />
                <TreeNode label={<UserLine key="1" user={props.users[0]} roles={props.roles} />} />
            </TreeNode>
        </TreeNode>
        <TreeNode label={<UserLine key="1" user={props.users[0]} roles={props.roles} />}>
            <TreeNode label={<UserLine key="1" user={props.users[0]} roles={props.roles} />} />
            <TreeNode label={<UserLine key="1" user={props.users[0]} roles={props.roles} />} />
        </TreeNode>
    </Tree>
);

export default StyledTree;