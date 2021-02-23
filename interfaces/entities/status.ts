/** Job status */
export enum EnumStatus {
  validating = 'validating',
  queued = 'queued',
  analyzing = 'analyzing',
  unpack_pending = 'unpack_pending',
  unpacking = 'unpacking',
  unpack_requeue = 'unpack-requeue',
  unpacked = 'unpacked',
  post_analysis = 'post_analysis',
  complete = 'complete',
  fail = 'fail'
}
