const DaTreeTableModals = {}
function registDaTreeTableModal (newModal) {
  DaTreeTableModals[newModal.name] = newModal
}
export { DaTreeTableModals, registDaTreeTableModal }
