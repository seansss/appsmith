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
import { Dispatch } from "redux";

interface Props {
  branchName: string;
  setMenuOpen: (_: boolean) => void;
}

function DeleteButton(dispatch: Dispatch<any>, branchName: string) {
  return (
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
    />
  );
}

function MenuButton(
  setOpen: (value: ((prevState: boolean) => boolean) | boolean) => void,
  open: boolean,
  setMenuOpen: (_: boolean) => void,
) {
  return (
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
  );
}

export default function BranchMoreMenu({ branchName, setMenuOpen }: Props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const buttons = [DeleteButton(dispatch, branchName)];
  const menuButton = MenuButton(setOpen, open, setMenuOpen);

  return (
    <Menu
      className="git-branch-more-menu"
      data-testid="t--git-branch-more-menu"
      isOpen={open}
      menuItemWrapperWidth={"fit-content"}
      position="bottom"
      target={menuButton}
    >
      {buttons}
    </Menu>
  );
}
