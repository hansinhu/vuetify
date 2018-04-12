import {
  createSimpleFunctional
} from '../../util/helpers'

import VDataTable from './VDataTable'
import VEditDialog from './VEditDialog'
import VRow from './VRow'
import VCell from './VCell'
import VCellCheckbox from './VCellCheckbox'
import VTablePagination from './VTablePagination'
import VTableHeaders from './VTableHeaders'
import VRowExpandable from './VRowExpandable'
import VRowGroup from './VRowGroup'

const VTableOverflow = createSimpleFunctional('v-table__overflow')

export { VDataTable, VEditDialog, VTableOverflow, VRow, VCell, VCellCheckbox, VTablePagination }

/* istanbul ignore next */
VDataTable.install = function install (Vue) {
  Vue.component(VDataTable.name, VDataTable)
  Vue.component(VEditDialog.name, VEditDialog)
  Vue.component(VTableOverflow.name, VTableOverflow)
  Vue.component(VCell.name, VCell)
  Vue.component(VCellCheckbox.name, VCellCheckbox)
  Vue.component(VRow.name, VRow)
  Vue.component(VTablePagination.name, VTablePagination)
  Vue.component(VTableHeaders.name, VTableHeaders)
  Vue.component(VRowExpandable.name, VRowExpandable)
  Vue.component(VRowGroup.name, VRowGroup)
}

export default VDataTable
