"use client";

import { Checkbox, Modal } from "antd";

export function SettingsModal({
  closeSettingsModal,
  settings,
  setSettings,
  isOpen,
}) {
  return (
    <Modal
      okType="primary"
      okText="Save"
      open={isOpen}
      footer={null}
      onCancel={() => closeSettingsModal()}
    >
      <div className="flex flex-col gap-4 p-4">
        <Checkbox
          checked={settings.generateNumbers}
          onChange={(e) =>
            setSettings({ ...settings, generateNumbers: e.target.checked })
          }
        >
          Generate Number
        </Checkbox>
        <Checkbox
          checked={settings.generateQuestions}
          onChange={(e) =>
            setSettings({ ...settings, generateQuestions: e.target.checked })
          }
        >
          Generate Question
        </Checkbox>
      </div>
    </Modal>
  );
}
