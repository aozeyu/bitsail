/*
 * Copyright 2022 Bytedance Ltd. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bytedance.bitsail.connector.print.sink.option;

import com.bytedance.bitsail.common.option.ConfigOption;

import static com.bytedance.bitsail.common.option.ConfigOptions.key;
import static com.bytedance.bitsail.common.option.WriterOptions.WRITER_PREFIX;

/**
 * Created 2022/8/16
 */
public interface PrintWriterOptions {
  ConfigOption<Integer> BATCH_SIZE =
      key(WRITER_PREFIX + "batch_size")
          .defaultValue(10);

  ConfigOption<Boolean> SAMPLE_WRITE =
      key(WRITER_PREFIX + "sample_write")
          .defaultValue(false);

  ConfigOption<Integer> SAMPLE_LIMIT =
      key(WRITER_PREFIX + "sample_limit")
          .defaultValue(5);
}
