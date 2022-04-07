import React, { useState } from "react";
import { Colors } from "constants/Colors";
import AnalyticsUtil from "utils/AnalyticsUtil";
import { IconSize } from "components/ads";
import Icon from "components/ads/Icon";
import Menu from "components/ads/Menu";
import { deleteBranchInit } from "actions/gitSyncActions";
import { useDispatch } from "react-redux";
import { createMessage, DELETE } from "@appsmith/constants/messages";
import DangerMenuItem from "./DangerMenuItem";

interface Props {
  branchName: string;
  setMenuOpen: (_: boolean) => void;
}

export default function BranchMoreMenu({ branchName, setMenuOpen }: Props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const children = [
    <DangerMenuItem
      className="git-branch-more-menu-item danger"
      data-testid="t--branch-more-menu-delete"
      icon="delete"
      key={"delete-branch-button"}
      onSelect={() =>
        dispatch(deleteBranchInit({ branchToDelete: branchName }))
      }
      selected
      text={createMessage(DELETE)}
    />,
  ];

  return (
    <Menu
      className="git-branch-more-menu"
      data-testid="t--git-branch-more-menu"
      isOpen={open}
      menuItemWrapperWidth={"fit-content"}
      position="bottom"
      target={
        <Icon
          fillColor={Colors.DARK_GRAY}
          hoverFillColor={Colors.GRAY_900}
          name="more-2-fill"
          onClick={() => {
            AnalyticsUtil.logEvent("GS_BRANCH_MORE_MENU_OPEN", {
              source: "GS_OPEN_BRANCH_LIST_POPUP",
            });
            setOpen(!open);
            setMenuOpen(!open);
          }}
          size={IconSize.XXXXL}
        />
      }
    >
      {children.map((c) => c)}
    </Menu>
  );
}
