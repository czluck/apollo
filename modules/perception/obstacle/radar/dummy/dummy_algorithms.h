/******************************************************************************
 * Copyright 2017 The Apollo Authors. All Rights Reserved.
 * Modifications Copyright (c) 2018 LG Electronics, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *****************************************************************************/
#ifndef MODULES_PERCEPTION_OBSTACLE_RADAR_DUMMY_DUMMY_ALGORITHMS_H_
#define MODULES_PERCEPTION_OBSTACLE_RADAR_DUMMY_DUMMY_ALGORITHMS_H_

#include <memory>
#include <string>
#include <vector>

#include "modules/perception/obstacle/radar/interface/base_radar_detector.h"

namespace apollo {
namespace perception {

class DummyRadarDetector : public BaseRadarDetector {
 public:
  DummyRadarDetector() : BaseRadarDetector() {}
  ~DummyRadarDetector() = default;

  bool Init() override { return result_init_; }

  bool Detect(const ContiRadar &raw_obstacles,
              const std::vector<PolygonDType> &map_polygons,
              const RadarDetectorOptions &options,
              std::vector<std::shared_ptr<Object>> *objects) override;

  std::string name() const override { return "DummyRadarDetector"; }

 private:
  // for unit test
  bool result_init_ = true;
  bool result_detect_ = true;

  DISALLOW_COPY_AND_ASSIGN(DummyRadarDetector);
};

REGISTER_RADARDETECTOR(DummyRadarDetector);
}  // namespace perception
}  // namespace apollo

#endif  // MODULES_PERCEPTION_OBSTACLE_RADAR_DUMMY_DUMMY_ALGORITHMS_H_
