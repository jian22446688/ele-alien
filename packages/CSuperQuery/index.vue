<template>
  <el-row :gutter="10">
    <el-col
      v-for="form in getForms"
      :key="form.id"
      :span="form.span"
      class="cc-margin-b-10">
      <div v-if="!form.hidden">
        <template v-if="form.type === 'radio'">
          <el-radio-group
            v-if="form.list"
            v-model="form.value"
            :text-color="form.textColor"
            :fill="form.fill"
            @change="handleChange($event, form.callback)">
            <el-radio
              v-for="radio in form.list"
              :key="radio.label"
              :label="radio.name"
              :disabled="radio.disabled"
              :border="radio.border">{{ radio.label }}</el-radio>
          </el-radio-group>
        </template>
        <template v-else-if="form.type === 'radio-button'">
          <el-radio-group
            v-if="form.list"
            v-model="form.value"
            :text-color="form.textColor"
            :fill="form.fill"
            @change="handleChange($event, form.callback)">
            <el-radio-button
              v-for="radio in form.list"
              :key="radio.lable"
              :label="radio.label"
              :disabled="radio.disabled"/>
          </el-radio-group>
        </template>
        <template v-else-if="form.type === 'checkbox'">
          <el-checkbox-group
            v-if="form.list"
            v-model="form.value"
            :text-color="form.textColor"
            :fill="form.fill"
            :disabled="form.disabled"
            :min="form.min"
            :max="form.max"
            @change="handleChange($event, form.callback)">
            <el-checkbox
              v-for="checkbox in form.list"
              :key="checkbox.lable"
              :label="checkbox.label"
              :disabled="checkbox.disabled"/>
          </el-checkbox-group>
        </template>
        <template v-else-if="form.type === 'checkbox-button'">
          <el-checkbox-group
            v-if="form.list"
            v-model="form.value"
            :text-color="form.textColor"
            :fill="form.fill"
            :disabled="form.disabled"
            :min="form.min"
            :max="form.max"
            @change="handleChange($event, form.callback)">
            <el-checkbox-button
              v-for="checkbox in form.list"
              :key="checkbox.lable"
              :label="checkbox.label"
              :checked="checkbox.checked"
              :disabled="checkbox.disabled"/>
          </el-checkbox-group>
        </template>
        <template v-else-if="form.type === 'input'">
          <el-input
            v-model="form.value"
            :maxlength="form.maxlength"
            :minlength="form.minlength"
            :clearable="form.clearable"
            :disabled="form.disabled"
            :prefix-icon="form.prefixIcon"
            :suffix-icon="form.suffixIcon"
            :readonly="form.readonly"
            :placeholder="form.placeholder"/>
        </template>
        <template v-else-if="form.type === 'input-number'">
          <el-input-number
            v-model="form.value"
            :min="form.min"
            :max="form.max"
            :style="form.style"
            :label="form.label"
            @change="handleChange($event, form.callback)"/>
        </template>
        <template v-else-if="form.type === 'select'">
          <el-select
            v-model="form.value"
            :style="form.style"
            :placeholder="form.placeholder"
            :multiple="form.multiple"
            :disabled="form.disabled"
            :clearable="form.clearable"
            :filterable="form.filterable"
            :allow-create="form.allowCreate"
            :filter-method="form.filterMethod"
            :remote="form.remote"
            :loading="form.loading"
            :loading-text="form.loadingText"
            :no-match-text="form.noMatchText"
            :no-data-text="form.noDataText"
            :popper-class="form.popperClass"
            :reserve-keyword="form.reserveKeyword"
            :default-first-option="form.defaultFirstOption"
            :automatic-dropdown="form.automaticDropdown"
            @change="handleChange($event, form.callback)">
            <el-option
              v-for="select in form.list"
              :key="select.name"
              :label="form.propLabel ? select[form.propLabel] : select.label"
              :value="form.propValue ? select[form.propValue] : select.value"/>
          </el-select>
        </template>
        <template v-else-if="form.type === 'cascader'">
          <el-cascader
            v-model="form.value"
            :style="form.style"
            :options="form.list"
            :props="form.props"
            :separator="form.separator"
            :popper-class="form.popperClass"
            :placeholder="form.placeholder"
            :disabled="form.disabled"
            :clearable="form.clearable"
            :filterable="form.filterable"
            :check-strictly="form.checkStrictly"
            :show-all-levels="form.showAllLevels || true"
            @change="handleChange($event, form.callback)"/>
        </template>
        <template v-else-if="form.type === 'switch'">
          <el-switch
            v-model="form.value"
            :style="form.style"
            :active-color="form.activeColor"
            :inactive-color="form.inactiveColor"
            :disabled="form.disabled"
            :active-icon-class="form.activeIconClass"
            :inactive-icon-class="form.inactiveIconClass"
            :active-text="form.activeText"
            :inactive-text="form.inactiveText"
            :active-value="form.activeValue"
            :inactive-value="form.inactiveValue"
            :name="form.name"
            @change="handleChange($event, form.callback)"/>
        </template>
        <template v-else-if="form.type === 'slider'">
          <el-slider
            v-model="form.value"
            :min="form.min"
            :max="form.max"
            :disabled="form.disabled"
            :step="form.step"
            :show-input="form.showInput"
            :show-input-controls="form.showInputControls"
            :show-stops="form.showStops"
            :show-tooltip="form.showTooltip"
            :format-tooltip="form.formatTooltip"
            :range="form.range"
            :vertical="form.vertical"
            :height="form.height"
            :label="form.label"
            :debounce="form.debounce"
            :tooltip-class="form.tooltipClass"
            :marks="form.marks"/>
        </template>
        <template v-else-if="form.type === 'timepicker'">
          <el-time-select
            v-model="form.value"
            :picker-options="form.pickerOptions"
            :placeholder="form.placeholder"
            :readonly="form.readonly"
            :disabled="form.disabled"
            :editable="form.editable"
            :style="form.style"
            :clearable="form.clearable"
            :start-placeholder="form.startPlaceholder"
            :end-placeholder="form.endPlaceholder"
            :is-range="form.isRange"
            :arrow-control="form.arrowControl"
            :align="form.align"
            :popper-class="form.popperClass"
            :range-separator="form.rangeSeparator"
            :value-format="form.valueFormat"
            :default-value="form.defaultValue"
            :prefix-icon="form.prefixIcon"
            :clear-icon="form.clearIcon"
            @change="handleChange($event, form.callback)"/>
        </template>
        <template v-else-if="form.type === 'datepicker'">
          <el-date-picker
            v-model="form.value"
            :type="form.mode || 'date'"
            :placeholder="form.placeholder"
            :readonly="form.readonly"
            :disabled="form.disabled"
            :editable="form.editable"
            :clearable="form.clearable"
            :format="form.format"
            :align="form.align"
            :style="form.style"
            :range-separator="form.rangeSeparator"
            :value-format="form.valueFormat"
            :default-value="form.defaultValue"
            :default-time="form.defaultTime"
            :popper-class="form.popperClass"
            :unlink-panels="form.unlinkPanels"
            :picker-options="form.pickerOptions"
            :start-placeholder="form.startPlaceholder"
            :end-placeholder="form.endPlaceholder"
            :prefix-icon="form.prefixIcon"
            :clear-icon="form.clearIcon"
            @change="handleChange($event, form.callback)"/>
        </template>
        <template v-else-if="form.type === 'select-page'">
          <CSelectPage
            v-model="form.value"
            :option="form.option"
            :table-interface="form.tableInterface"
            :table-header="form.tableHeader"/>
        </template>
        <template v-else-if="form.type === 'slot'">
          <slot :name="form.slot"/>
        </template>
        <template v-else>
          <div>此组件无效</div>
        </template>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  components: {},
  props: {
    options: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      option: this.options,
      tempOption: JSON.parse(JSON.stringify(this.options))
    }
  },
  computed: {
    getForms() {
      if (!this.option.forms) return []
      let forms = this.option.forms.filter(f => {
        return f.hidden !== true
      })
      return forms
    }
  },
  mounted() {},
  methods: {
    getValueObj() {
      let item = {}
      if (this.option && this.option.forms) {
        this.option.forms.forEach(t => {
          if (t.name !== undefined && t.value != null) {
            item[t.name] = t.value
          }
        })
      } else {
        console.error('super query option form. error')
        return
      }
      return item
    },
    setFormValue(name, val) {
      if (this.option && this.option.forms) {
        this.option.forms.find(t => {
          if (t.name === name) {
            this.$set(t, 'value', val)
            return true
          }
        })
      } else {
        console.error('super query option form. error')
        return
      }
    },
    setFormEdit(name, key, val) {
      if (this.option && this.option.forms) {
        this.option.forms.find(t => {
          if (t.name === name) {
            this.$set(t, key, val)
            return true
          }
        })
      } else {
        console.error('super query option form. error')
        return
      }
    },
    resetValue() {
      if (this.option && this.option.forms) {
        this.option.forms.forEach(t => {
          if (t.defaultVal) {
            this.$set(t, 'value', t.defaultVal)
          } else {
            this.$set(t, 'value', undefined)
          }
        })
      } else {
        console.error('super query option form. error')
        return
      }
      // this.option = this.tempOption
    },
    handleChange(val, callback) {
      if (callback) callback(val)
    }
  }
}

</script>
