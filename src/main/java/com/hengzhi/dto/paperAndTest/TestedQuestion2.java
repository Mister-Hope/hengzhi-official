package com.hengzhi.dto.paperAndTest;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * @author Jane
 * @version 1.0
 * @description
 * @Date 2021/6/10
 */
@Data
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
public class TestedQuestion2 {
    //标签内容
    private String kind;
    //题目内容
    private String content;
    //答案内容
    private String answer;
    //正确率
    @JsonProperty("cRate")
    private double cRate;
    //题目讲解
    private String description;
    //题目类型
    @JsonProperty("qType")
    private String qType;
    //题号
    @JsonProperty("qNumber")
    private Integer qNumber;
}
