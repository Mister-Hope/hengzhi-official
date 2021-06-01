package com.hengzhi.dto.paperAndTest;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
public class TestedQuestion {
    //标签内容
    private String kind;
    //题目内容
    private String content;
    //答案内容
    private String answer;
    //正确率
    private String cRate;
    //题目讲解
    private String description;
    //题目类型
    private String qType;
}