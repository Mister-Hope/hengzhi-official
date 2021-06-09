package com.hengzhi;

import com.hengzhi.dao.StudentTestDao;
import com.hengzhi.dto.paperAndTest.QuestionAnswer;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.web.WebAppConfiguration;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @author Jane
 * @version 1.0
 * @description 学生考试相关测试类
 * @Date 2021/5/24
 */
@SpringBootTest
@WebAppConfiguration
public class StudenTestTests {
    @Resource
    StudentTestDao studentTestDao;

    //获得邀请码测试
    @Test
    void test() {
        System.out.println(studentTestDao.selectPaperIdByCode("dfdfdg"));
    }

    //获得未考试卷
    @Test
    void test1() {
        System.out.println(studentTestDao.getUntestedPapers(1));
    }

    //获得已考试卷
    @Test
    void test2() {
        System.out.println(studentTestDao.getTestedPapers(1));
    }

    //获取试卷信息
    @Test
    void test3() {
        System.out.println(studentTestDao.getPaperInformation(1,1));
    }

    //获取试卷的试题信息
    @Test
    void test4() {
        System.out.println(studentTestDao.getQInfo(1));
    }

    //根据题目id和数据库名获取试题内容
    @Test
    void test5() {
        System.out.println(studentTestDao.getQuestion(1, "questions_single"));
    }

    //获得答题信息
    @Test
    void test6() {
        System.out.println(studentTestDao.getAnswerSituation(1, 1));
    }

    //获得试题内容
    @Test
    void test7() {
        System.out.println(studentTestDao.getTestQuestions(1, "questions_single"));
    }

    //获得考试的试卷信息
    @Test
    void test8() {
        System.out.println(studentTestDao.getTestPaperInfo(1));
    }

    //提交试卷
    @Test
    void test9() {
        ArrayList<QuestionAnswer> answerList = new ArrayList<>();
        answerList.add(new QuestionAnswer("abs", 1));
        answerList.add(new QuestionAnswer("dsdsfd", 2));
        studentTestDao.submitPaper(1, 1, answerList);
    }

    //提交试卷得分和答题时间
    @Test
    void test10() {
        studentTestDao.submitPaperInfo(1, 1, 23, 45);
    }

    //修改题目得分
    @Test
    void test11() {
        studentTestDao.setScore(5, 1, 1, 1);
    }

    //提交总分
    @Test
    void test12() {
        studentTestDao.setSum(50, 1, 1);
    }
    //测试算分
    @Test
    void test13(){

    }
}
